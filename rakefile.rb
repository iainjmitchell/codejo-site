require './deployment/deployer.rb'

task :default => [:dependencies, :publish]

task :dependencies do
	sh 'bundle install'
end

task :publish do
	deployment_folders = ['img', 'lib', 'css']
	deployment_folders.each do |folder|
		Deployer.run("site/#{folder}", folder)
	end
	Deployer.run_for_file('site/index.html', 'index.html')
end

