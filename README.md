# Fully self contained personal website

## Needed tools
* python3 with dependencies specified in scripts/requirements.txt
* npm
* rollup for creating js bundles (npm install rollup -g)
* terser for js minification (npm install terser -g)
* docker

## General
Whole website content is available under site/ directory. In script/s directory there scripts for automating build and deployment. You can run this website locally by first generating self signed cert (from nginx/):
```
bash generate_self_signed_cert.bash 
Generating a RSA private key
............................................................+++++
.............................................................+++++
writing new private key to '/home/igor/ws/sites/iroztropinski/nginx/certs/selfsigned.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
```
And then running (from scripts/):
```
python3 igroz_cli.py 
Welcome Igor!
We are operating on...
ROOT_DIR: /home/igor/ws/sites/iroztropinski
Deploy package will be created in /home/igor/ws/sites/iroztropinski/_deploy directory

There are a couple of options...
1 - build
2 - build and run locally
3 - build and deploy to remote
4 - resize images 
```