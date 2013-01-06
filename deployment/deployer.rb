require 'net/ftp'
require 'yaml'

class FTPClient
  attr_reader :remote_path
 
  def initialize(remote_path)
    @remote_path = remote_path
  end
 
  def ftp
    @ftp ||= Net::FTP.new
  end
 
  def connect
    ftp_credentials = YAML.load_file("credentials.yaml")
    ftp.connect(ftp_credentials["server"])
    ftp.login(ftp_credentials["username"], ftp_credentials["password"])
    ftp.passive = true
    ftp.chdir(remote_path) if (@remote_path != nil)
  end
 
  def delete_recursive(file_or_dir)
    if file_or_dir == list(file_or_dir).first
      puts "Removing file: #{file_or_dir}"
      ftp.delete(file_or_dir)
    else
      list(file_or_dir).each { |entry| delete_recursive(file_or_dir + "/" + entry) }
      puts "Removing directory: #{file_or_dir}"
      ftp.rmdir(file_or_dir)
    end
  end
 
  def copy_recursive(file_or_dir, prefix_to_remove = nil)
    remote_file_or_dir = prefix_to_remove ? file_or_dir.gsub(prefix_to_remove, "") : file_or_dir
    if File.directory?(file_or_dir)
      puts "Creating directory #{remote_file_or_dir}"
      ftp.mkdir(remote_file_or_dir)
      Dir.glob(file_or_dir + "/*").each { |entry| copy_recursive(entry, prefix_to_remove) }
    else 
      upload_file(file_or_dir, remote_file_or_dir)
    end
  end

  def upload_file(file, remote_file)
    puts "Creating file #{remote_file}"
    ftp.putbinaryfile(file, remote_file)
  end
 
  def list(path = nil)
    ftp.nlst(path).select { |entry| entry !~ /^\.{1,2}$/ }
  end
end
 
class Deployer
  def self.run(local, remote)
    ftp_client = FTPClient.new(remote)
    ftp_client.connect
 
    # Remove all files
    ftp_client.list.each do |entry|
      ftp_client.delete_recursive(entry)
    end
 
    # Copy files placed in public directory
    Dir.glob(local + "/*").each do |entry|
      ftp_client.copy_recursive(entry, local + "/")
    end
  ensure
    ftp_client.ftp.close
  end

  def self.run_for_file(local_file, remote_file)
    ftp_client = FTPClient.new(nil)
    ftp_client.connect
    ftp_client.upload_file(local_file, remote_file)
  end
end