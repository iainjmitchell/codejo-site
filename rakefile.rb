require './deployment/deployer.rb'
require './test/lib/qunit.rb'

task :default => [:dependencies, :qunit, :publish]

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

qunit :qunit do |config|
	config.phantom_exe = './test/lib/phantomjs'
	config.qunit_runner = './test/lib/run-qunit.js'
	config.test_directory = './test'
end

