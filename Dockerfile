FROM centos:latest
WORKDIR app
COPY . .

RUN yum install -y gcc python3-devel\
&& curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash \
&& . ~/.nvm/nvm.sh \
&& nvm install 16.13.1 \
&& npm install \
&& npm run production \
&& pip3 install -r requirements.txt

CMD ["python3","app.py","--prod"]