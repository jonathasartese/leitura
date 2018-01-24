import React, { Component } from 'react';
import * as ReadableAPI from './utils/ReadableAPI'
import MenuBar from './components/MenuBar'
import PostField from './components/PostField'
import SubHead from './components/SubHead'



class App extends Component {

    componentDidMount() {
        ReadableAPI.getAllCategories().then((categories) => {
          this.setState({ categories })
        })
      }

      
  render() {
    return (
<div>
      <div>
   
        <title>Blog &ndash; Layout Examples &ndash; Pure</title>
        </div>
        
        <div>

        <div id="layout" class="pure-g">
            <MenuBar />

            <div class="content pure-u-1 pure-u-md-3-4">
                <div>
                    <SubHead />
                    <PostField />
                    
                </div>
            </div>
        </div>

    </div>
</div>

    );
  }
}

export default App;
