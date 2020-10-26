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
          let sendMessages ="";
          sendMessages = "【"+getRQ('rqType')+"クエスト】\n";
          sendMessages += "『"+getRQ('rqName')+"』\n";

          let rateFlag = false;
          let rate = getRQ('rqRate');
          if (!isNaN(Number(rate))) {
            if (Number.isInteger(Number(rate))) {
              rate = parseInt(rate, 10);
              if (rate > 8) {
                rate = 8;
              } else if (rate < 0) {
                rate = 0;
              }
              const blackStar = '★';
              const whiteStar = '☆';
              sendMessages += blackStar.repeat(rate);
              sendMessages += whiteStar.repeat(8-rate);
              sendMessages += "\n";
              rateFlag = true;
            }
          }
          if (!rateFlag) {
            sendMessages += "[難易度]\n"+rate+"\n";
          }

          sendMessages += "[目標]\n"+getRQ('rqTarget')+"\n";
          sendMessages += "[報酬]\n"+getRQ('rqReward')+"\n";
          sendMessages += "[制限時間]\n"+getRQ('rqTimelimit')+"\n------------\n";
          sendMessages += "[依頼主のコメント]\n"+getRQ('rqComment');

          let debugMessages = "";

          debugMessages += "rateFlag=";
          if (rateFlag) {
            debugMessages += "true\n";
          } else {
            debugMessages += "false\n";
          }

          liff.sendMessages([{
            'type': 'text',
            'text': sendMessages
          },{
            'type': 'text',
            'text': 'おねがいをコピーして使ってね！'
          },{
            'type': 'text',
            'text': debugMessages
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
          let sendMessages ="";
          sendMessages = "【"+getRQ('rqType')+"クエスト】\n";
          sendMessages += "『"+getRQ('rqName')+"』\n";

          let rateFlag = false;
          let rate = getRQ('rqRate');
          if (!isNaN(Number(rate))) {
            if (Number.isInteger(Number(rate))) {
              rate = parseInt(rate, 10);
              if (rate > 8) {
                rate = 8;
              } else if (rate < 0) {
                rate = 0;
              }
              const blackStar = '★';
              const whiteStar = '☆';
              sendMessages += blackStar.repeat(rate);
              sendMessages += whiteStar.repeat(8-rate);
              sendMessages += "\n";

              rateFlag = true;
            }
          }
          if (!rateFlag) {
            sendMessages += "[難易度]\n"+rate+"\n";
          }

          sendMessages += "[目標]\n"+getRQ('rqTarget')+"\n";
          sendMessages += "[報酬]\n"+getRQ('rqReward')+"\n";
          sendMessages += "[制限時間]\n"+getRQ('rqTimelimit')+"\n------------\n";
          sendMessages += "[依頼主のコメント]\n"+getRQ('rqComment');

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