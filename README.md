Add [orchestrate](https://orchestrate.io) to Botkit as a storage engine.
```javascript
var Botkit = require('botkit');
var Orchestrate = require('botkit-orchestrate');


var controller = Botkit.slackbot({
  debug: false,
  storage: new Orchestrate('the_token_orchestrate').storage
});

```