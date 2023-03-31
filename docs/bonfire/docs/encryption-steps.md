---
title: encryption steps
---

Ever wondered what all those weird messages mean? Well heres a doc article to tell you! This is more targeted at general audiances than the developers, but it will still be useful to both!!

So, to setup AES (Advanced Encryption Standard) keys, we need to go through a TLS (Transport Layer Security) "handshake", which uses RSA (Rivest-Shamir-Adleman) keys to securely establish a shared secret. This will happen every time you connect to voice, or view a text channel for the first time in a while, or every few months if its opened reguarly! This helps keep the shared secret secret, even if there is a data leak that we don't know about--all your messages are still safe. 

**ALL TIMES CURRENTLY ARE AN ESTIMATE AND NOT FIELD TESTED YET!!** 

1. **Sending Encryption Request** (time: ~1-10ms)
2. **Recieving TLS certificate** (time:  ~1-10ms)
3. **Veryfying Certificate** (time: ~2-7ms)
4. **Extracting Public Key** (time: ~2-7ms)
5. **Encrypting pre-master key** (time: ~2-5ms)
6. **Computing shared secret** (time: 5-30ms)
7. **Sending Client Test Message** (time: 1-3ms)
8. **Decoding Server Test Message** (time: 1-3ms)
9. **Handshake Complete!** is when the handshake is completed, it will last as long as is needed for that medium. For example, if you are in a voice call, it will last until you disconnect. 

