const _0x4696fe=_0x15ce;(function(_0x219ce6,_0x42cd63){const _0x373918=_0x15ce,_0x1a7ba6=_0x219ce6();while(!![]){try{const _0x268b69=-parseInt(_0x373918(0x1d5))/0x1+parseInt(_0x373918(0x1f3))/0x2+-parseInt(_0x373918(0x1d2))/0x3*(parseInt(_0x373918(0x1e8))/0x4)+parseInt(_0x373918(0x1b0))/0x5+-parseInt(_0x373918(0x1c6))/0x6*(parseInt(_0x373918(0x1e4))/0x7)+parseInt(_0x373918(0x1c4))/0x8*(parseInt(_0x373918(0x1c0))/0x9)+-parseInt(_0x373918(0x1d3))/0xa*(parseInt(_0x373918(0x1ec))/0xb);if(_0x268b69===_0x42cd63)break;else _0x1a7ba6['push'](_0x1a7ba6['shift']());}catch(_0x195ec7){_0x1a7ba6['push'](_0x1a7ba6['shift']());}}}(_0x1414,0xde2ee));import{promises as _0x5a6a30}from'fs';import _0x2eb20d from'path';function _0x15ce(_0xe1f84f,_0x3c1927){const _0x141427=_0x1414();return _0x15ce=function(_0x15ce64,_0x50fe21){_0x15ce64=_0x15ce64-0x1af;let _0x33fe14=_0x141427[_0x15ce64];return _0x33fe14;},_0x15ce(_0xe1f84f,_0x3c1927);}import _0x4d0b98 from'node-fetch';import _0x354811 from'@whiskeysockets/baileys';const {generateWAMessageFromContent,proto}=_0x354811;import _0x51532 from'../../config.cjs';const __filename=new URL(import.meta[_0x4696fe(0x1b6)])[_0x4696fe(0x1f2)],__dirname=_0x2eb20d[_0x4696fe(0x1b1)](__filename),chatHistoryFile=_0x2eb20d[_0x4696fe(0x1dd)](__dirname,_0x4696fe(0x1d1)),mistralSystemPrompt=_0x4696fe(0x1c3);async function readChatHistoryFromFile(){const _0x44b394=_0x4696fe;try{const _0x2a6006=await _0x5a6a30[_0x44b394(0x1da)](chatHistoryFile,_0x44b394(0x1cf));return JSON[_0x44b394(0x1e5)](_0x2a6006);}catch(_0x3f1187){return{};}}async function writeChatHistoryToFile(_0x5d0456){const _0x12d677=_0x4696fe;try{await _0x5a6a30[_0x12d677(0x1b2)](chatHistoryFile,JSON[_0x12d677(0x1d9)](_0x5d0456,null,0x2));}catch(_0x12957f){console[_0x12d677(0x1d7)]('Error\x20writing\x20chat\x20history\x20to\x20file:',_0x12957f);}}async function updateChatHistory(_0x2b86dd,_0x571036,_0x24f049){const _0x34b6e2=_0x4696fe;!_0x2b86dd[_0x571036]&&(_0x2b86dd[_0x571036]=[]),_0x2b86dd[_0x571036][_0x34b6e2(0x1db)](_0x24f049),_0x2b86dd[_0x571036][_0x34b6e2(0x1dc)]>0x14&&_0x2b86dd[_0x571036][_0x34b6e2(0x1e3)](),await writeChatHistoryToFile(_0x2b86dd);}async function deleteChatHistory(_0x5820d0,_0x21d886){delete _0x5820d0[_0x21d886],await writeChatHistoryToFile(_0x5820d0);}const mistral=async(_0x450982,_0x216bec)=>{const _0xfb239e=_0x4696fe,_0x2c5b63=await readChatHistoryFromFile(),_0x37cf90=_0x450982[_0xfb239e(0x1b7)]['toLowerCase']();if(_0x37cf90===_0xfb239e(0x1ca)){await deleteChatHistory(_0x2c5b63,_0x450982[_0xfb239e(0x1ed)]),await _0x216bec[_0xfb239e(0x1c1)](_0x450982[_0xfb239e(0x1e0)],{'text':'Conversation\x20deleted\x20successfully'},{'quoted':_0x450982});return;}const _0x1a2312=_0x51532[_0xfb239e(0x1b8)],_0x2b29f5=_0x450982[_0xfb239e(0x1b7)][_0xfb239e(0x1ce)](_0x1a2312)?_0x450982[_0xfb239e(0x1b7)]['slice'](_0x1a2312[_0xfb239e(0x1dc)])[_0xfb239e(0x1d0)]('\x20')[0x0][_0xfb239e(0x1d8)]():'',_0x93828c=_0x450982[_0xfb239e(0x1b7)][_0xfb239e(0x1ba)](_0x1a2312[_0xfb239e(0x1dc)]+_0x2b29f5[_0xfb239e(0x1dc)])[_0xfb239e(0x1de)](),_0x59be17=['ai','gpt',_0xfb239e(0x1cb)];if(_0x59be17['includes'](_0x2b29f5)){if(!_0x93828c){await _0x216bec[_0xfb239e(0x1c1)](_0x450982[_0xfb239e(0x1e0)],{'text':_0xfb239e(0x1cd)},{'quoted':_0x450982});return;}try{const _0x116462=_0x2c5b63[_0x450982[_0xfb239e(0x1ed)]]||[],_0x5d38df=[{'role':_0xfb239e(0x1f0),'content':mistralSystemPrompt},..._0x116462,{'role':_0xfb239e(0x1c8),'content':_0x93828c}];await _0x450982['React']('⏳');const _0x11013b=await _0x4d0b98(_0xfb239e(0x1cc),{'method':_0xfb239e(0x1b9),'headers':{'Content-Type':'application/json'},'body':JSON[_0xfb239e(0x1d9)]({'type':_0xfb239e(0x1ea),'model':_0xfb239e(0x1c9),'messages':_0x5d38df})});if(!_0x11013b['ok'])throw new Error(_0xfb239e(0x1be)+_0x11013b[_0xfb239e(0x1bc)]);const _0x120d28=await _0x11013b[_0xfb239e(0x1d4)]();await updateChatHistory(_0x2c5b63,_0x450982[_0xfb239e(0x1ed)],{'role':_0xfb239e(0x1c8),'content':_0x93828c}),await updateChatHistory(_0x2c5b63,_0x450982[_0xfb239e(0x1ed)],{'role':_0xfb239e(0x1df),'content':_0x120d28[_0xfb239e(0x1c5)][_0xfb239e(0x1bf)]});const _0x393843=_0x120d28[_0xfb239e(0x1c5)][_0xfb239e(0x1bf)],_0x5465c0=_0x393843[_0xfb239e(0x1e1)](/```([\s\S]*?)```/);if(_0x5465c0){const _0xad3697=_0x5465c0[0x1];let _0x1f7106=generateWAMessageFromContent(_0x450982[_0xfb239e(0x1e0)],{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto[_0xfb239e(0x1c2)]['InteractiveMessage'][_0xfb239e(0x1ee)]({'body':proto['Message'][_0xfb239e(0x1b4)][_0xfb239e(0x1b5)]['create']({'text':_0x393843}),'footer':proto[_0xfb239e(0x1c2)][_0xfb239e(0x1b4)][_0xfb239e(0x1f1)][_0xfb239e(0x1ee)]({'text':_0xfb239e(0x1e2)}),'header':proto[_0xfb239e(0x1c2)]['InteractiveMessage'][_0xfb239e(0x1e9)]['create']({'title':'','subtitle':'','hasMediaAttachment':![]}),'nativeFlowMessage':proto['Message']['InteractiveMessage']['NativeFlowMessage'][_0xfb239e(0x1ee)]({'buttons':[{'name':_0xfb239e(0x1bb),'buttonParamsJson':JSON[_0xfb239e(0x1d9)]({'display_text':_0xfb239e(0x1d6),'id':_0xfb239e(0x1bd),'copy_code':_0xad3697})}]})})}}},{});await _0x216bec[_0xfb239e(0x1c7)](_0x1f7106[_0xfb239e(0x1eb)][_0xfb239e(0x1e6)],_0x1f7106[_0xfb239e(0x1af)],{'messageId':_0x1f7106[_0xfb239e(0x1eb)]['id']});}else await _0x216bec['sendMessage'](_0x450982[_0xfb239e(0x1e0)],{'text':_0x393843},{'quoted':_0x450982});await _0x450982['React']('✅');}catch(_0xa27b4f){await _0x216bec[_0xfb239e(0x1c1)](_0x450982[_0xfb239e(0x1e0)],{'text':_0xfb239e(0x1b3)},{'quoted':_0x450982}),console[_0xfb239e(0x1d7)](_0xfb239e(0x1e7),_0xa27b4f),await _0x450982[_0xfb239e(0x1ef)]('❌');}}};export default mistral;function _0x1414(){const _0x1c8a4a=['Copy\x20Your\x20Code','error','toLowerCase','stringify','readFile','push','length','resolve','trim','assistant','from','match','>\x20©\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20𝐓𝐑𝐄𝐗-𝐌𝐃','shift','7xUhgYb','parse','remoteJid','Error:\x20','10612VYHTUb','Header','text-generation','key','14720794hrljZq','sender','create','React','system','Footer','pathname','2762550ngInQd','message','2751810TVebwW','dirname','writeFile','Something\x20went\x20wrong','InteractiveMessage','Body','url','body','PREFIX','POST','slice','cta_copy','status','copy_code','HTTP\x20error!\x20status:\x20','response','9wkrAVx','sendMessage','Message','you\x20are\x20a\x20good\x20assistant.','14407048tYFiXE','result','4883124YyFtTH','relayMessage','user','hf/meta-llama/meta-llama-3-8b-instruct','/forget','mistral','https://matrixcoder.tech/api/ai','Please\x20give\x20me\x20a\x20prompt','startsWith','utf-8','split','../mistral_history.json','159gEdjdY','10xRKzRu','json','529739PhDJaZ'];_0x1414=function(){return _0x1c8a4a;};return _0x1414();}