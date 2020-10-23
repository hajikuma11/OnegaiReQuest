document.addEventListener("DOMContentLoaded", () => {
  liff
    .init({
      liffId: '1654949077-Mxbj67nj'
    })
    .then(() => {
      document.getElementById('go').addEventListener('click', () => {
        if (!liff.isInClient()) {
          document.getElementById('log').value += 'sendMessagesText ng\n';
        } else {
          liff.sendMessages([{
            'type': 'text',
            'text': document.getElementById('sendMessagesTextText').value
          }]).then(function() {
            document.getElementById('log').value += 'sendMessagesText completed\n';
          }).catch(function(error) {
            document.getElementById('log').value += 'sendMessagesText()=' + error + '\n';
          });
        }
      });
    })
    .catch((err) => {
      document.getElementById('log').value = 'init ng\n' + err;
    });
});