document.addEventListener("DOMContentLoaded", () => {
  liff
    .init({
      liffId: '1654949077-Mxbj67nj'
    })
    .then(() => {
      document.getElementById('talk').addEventListener('click', () => {
        if (!liff.isInClient()) {
          document.getElementById('log').value += '[ERROR!]作成失敗！\n';
        } else {
          sendMessages = createMessage();
          liff.sendMessages([{
            'type': 'text',
            'text': sendMessages
          },{
            'type': 'text',
            'text': 'おねがいをコピーして使ってね！'
          }]).then(function() {
            liff.closeWindow();
          }).catch(function(error) {
            document.getElementById('log').value += '[ERROR!]sendMessagesText()=' + error + '\n';
          });
        }
      });

      document.getElementById('share').addEventListener('click', () => {
        if (!liff.isInClient()) {
          document.getElementById('log').value += '[ERROR!]作成失敗！\n';
        } else {
          sendMessages = createMessage();
          liff.shareTargetPicker([{
            'type': 'text',
            'text': sendMessages
          }]).then(function() {
            liff.closeWindow();
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

function createMessage() {
  let msg = "【"+getRQ('rqType')+"クエスト】\n";
  msg += "『"+getRQ('rqName')+"』\n";
  msg += "[難易度]\n"+getRQ('rqRate')+"\n";
  msg += "[目標]\n"+getRQ('rqTarget')+"\n";
  msg += "[報酬]\n"+getRQ('rqReward')+"\n";
  msg += "[制限時間]\n"+getRQ('rqTimelimit')+"\n------------\n";
  msg += "[依頼主のコメント]\n"+getRQ('rqComment');

  return msg;
}