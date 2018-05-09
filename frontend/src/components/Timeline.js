import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import MenuBar from './MenuBar'
import PostField from './PostField'
import SubHead from './SubHead'

 

class Timeline extends Component {

  render() {
    return (
        <div>
            <div>
                <title>Blog &ndash; Layout Examples &ndash; Pure</title>
                </div>
                <div>
                <div id="layout" className="pure-g">
                    <MenuBar />

                    <div className="content pure-u-1 pure-u-md-3-4">
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

export default Timeline;
