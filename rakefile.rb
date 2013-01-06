require './deployment/deployer.rb'

task :default => [:dependencies, :publish]

task :dependencies do
	sh 'bundle install'
end

task :publish do
	deployment_folders = ['img', 'lib', 'css']
	deployment_folders.each do |folder|
		Deployer.run(folder, folder)
	end
	Deployer.run_for_file('index.html', 'index.html')
end

