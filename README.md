# nodejs-ransomeware

NodeJS ransomeware module.

# disclaimer

### THIS IS PURELY FOR EDUCATIONAL PURPOSE, I AM NOT RESPONSIBLE FOR ANY DAMAGE IT DOES ON YOUR COMPUTER OR SOMEONE ELSE.

THIS IS JUST TO DEMONSTRATE HOW AN NPM PACKAGE OR ANY SUSPECIOUS FILE CAN TRICK YOU IN RANSOMEWARE ATTACK. THEREFORE BE VERY CAUTIOUS WHILE UPDATING OR INSTALLING ANY THIRD PARTY PACKAGES.

It uses a bash script to do encrypt/decrypt folder. [Bash Script to Encrypt/Decrypt](https://gist.github.com/uzair004/ccb3bca85ed469a0ae82463a2a557e91)

### How to test
1. download [this github gist](https://gist.github.com/uzair004/ccb3bca85ed469a0ae82463a2a557e91) **change folder path in script to whatever folder you want to encrypt**
2. upload it as gist to your own github account or any cloud service
3. open `script.js` & update gist link with yours.

if your folder got encrypted, you can follow procedure in gist comment to decrypt it again.

the folder to encrypt & public key used to encrypt can be found in above script, you can change it to your own target folder path or use your own public/private keys pair.

**Generating private key:**
```openssl genrsa -aes256 -out private.pem```

**Generating public key**
```openssl rsa -in private.pem -pubout > public.pem```

next step is to copy your public key content to bash script, you can get public key content using `head public.pem` & paste it inside bash script as 
```
echo "-----BEGIN PUBLIC KEY-----
<your key here>
-----END PUBLIC KEY-----" > key.pem
```
as a result public key will be saved on target computer, & keep private key to yourself becasue that is used in decryption.
