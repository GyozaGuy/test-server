require 'open3'

task :default do
  IO.popen('bundle exec rerun --pattern server.rb --no-notify --quiet server.rb') do |process|
    process.each do |line|
      puts line
    end
  end
end
