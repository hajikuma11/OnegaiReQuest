document.addEventListener("DOMContentLoaded", () => {
  liff
    .init({
      liffId: '1654949077-Mxbj67nj'
    })
    .then(() => {
      document.getElementById('go').addEventListener('click', () => {
        if (!liff.isInClient()) {
          document.getElementById('log').value += '[ERROR!]作成失敗！\n';
        } else {
          let sendMessages ="";
          sendMessages = "【"+getRQ('rqType')+"】\n";
          sendMessages += "『"+getRQ('rqName')+"』\n";
          sendMessages += "[目標]\n"+getRQ('rqTarget')+"\n";
          sendMessages += "[報酬]\n"+getRQ('rqReward')+"\n";
          sendMessages += "[制限時間]\n"+getRQ('rqTimelimit')+"\n";

          let sendComment = "[依頼主のコメント]\n"+getRQ('rqComment');
          liff.sendMessages([{
            'type': 'text',
            'text': sendMessages
          },
          {
            'type': 'text',
            'text': sendComment
          }]).then(function() {
            document.getElementById('log').value += '[SUCCESS!]作成成功！\nこの画面を閉じて、おねがいをコピーして使おう！\n';
          }).catch(function(error) {
            document.getElementById('log').value += '[ERROR!]sendMessagesText()=' + error + '\n';
          });
        }
      });
    })
    .catch((err) => {
      document.getElementById('log').value = 'init ng\n' + err;
    });
});

function getRQ(str) {
  return document.getElementById(str).value;
}