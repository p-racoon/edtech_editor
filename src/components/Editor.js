import React, { useState, useRef } from 'react';
import { Form, Grid, TextArea } from 'semantic-ui-react'
import Markdown from './Markdown';

const Editor = () => {
    const handleTextInputOnChange = (e) => {
        setInputText(e.target.value);
    }
    const [inputText, setInputText] = useState('');
    const mainTextAreaRef = useRef(null);
    return (
        <div className="mainContainer" >
            <Grid columns={2} divided >
                <Grid.Row>
                    <Grid.Column >
                        <Form>
                            <TextArea
                                placeholder='Let the awesomeness begin ...'
                                ref={mainTextAreaRef}
                                value={inputText}
                                style={{ minHeight: '70vh' }}
                                rows={10}
                                onChange={(e) => handleTextInputOnChange(e)}
                            />
                        </Form>
                    </Grid.Column>
                    <Grid.Column >
                        <div className="previewArea">
                            {/* <Latex displayMode={true}> */}
                            {/* <div
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(markdownToHtmlEngine(
                                        <Latex displayMode={true}>
                                            {inputText}
                                        </Latex>
                                    ))
                                }}
                            /> */}
                            <Markdown source={inputText}/>
                            {/* </div> */}
                            {/* {inputText} */}
                            {/*  */}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Editor
