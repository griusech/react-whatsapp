import React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {Icon, Button, IconButton} from '@material-ui/core'



function App() {
  return (
    <div className="App">
    <Button
        variant="contained"
        color="primary"
        >
        {<Icon>send</Icon>}
    </Button>

    <IconButton 
      aria-label="send">
      {<Icon>send</Icon>}
    </IconButton>

    <IconButton 
      aria-label="">
      <InsertEmoticonIcon />
    </IconButton>
    


      </div>

      
  );
}

export default App;