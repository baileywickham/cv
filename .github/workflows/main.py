from workflow import *

on = On({'push': {'branches': ['main']}})
steps = [Step(Uses('actions/checkout@v3')),
         Step(Run('apt-get update && apt-get install -y curl gnupg wget libfontconfig python3')),
         Step(Run('wget https://raw.githubusercontent.com/baileywickham/files/master/phantomjs-2.1.1-linux-x86_64.tar.bz2')),
         Step(Run('tar -jxvf phantomjs-2.1.1-linux-x86_64.tar.bz2')),
         Step(Run('./toPDF.sh'))]
job = Job('build', 'ubuntu-latest', steps)
workflow = Workflow('CI', on, [job])

workflows = Workflows([workflow])


