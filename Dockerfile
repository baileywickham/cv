FROM ubuntu
RUN apt-get update && apt-get install -y curl gnupg wget libfontconfig python3 bzip2

WORKDIR /home/root
COPY . /home/root

RUN wget -v https://raw.githubusercontent.com/baileywickham/files/master/phantomjs-2.1.1-linux-x86_64.tar.bz2
RUN tar -jxvf phantomjs-2.1.1-linux-x86_64.tar.bz2
ENV OPENSSL_CONF=/dev/null

ENTRYPOINT [ "./toPDF.sh" ]


