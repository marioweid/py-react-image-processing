import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function Welcome() {
    return <div style={{
        width: "100%",
        height: "20rem",
        border: "1px solid white",
        backgroundColor: "#737881"
    }} className={"mb-1"}>
    </div>
}

function FileContainer(props: { sourceFile: string }) {
    return <img src={props.sourceFile} style={{width: "100%", height: "20rem"}}/>
}

function ImageContainer(props: { sourceFile: string }) {
    if (props.sourceFile === "") {
        return <Welcome/>
    } else {
        return <FileContainer sourceFile={props.sourceFile}/>
    }
}

function MorphingPage() {
    const [sourceFile, setSourceFile] = useState("");
    const [sourceFileLabel, setSourceFileLabel] = useState("Source image");
    const [targetFile, setTargetFile] = useState("");
    const [targetFileLabel, setTargetFileLabel] = useState("Target image");

    return (
        <Container>
            <Row>
                <Col xs={12} md={12}>
                    <h1>Face Morphing</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <h4>Source image</h4>
                    <ImageContainer sourceFile={sourceFile}/>
                    <Form.File id="source-file" custom>
                        <Form.File.Label>{sourceFileLabel}</Form.File.Label>
                        <Form.File.Input onChange={(e: any) => setSource(e.target.files)} accept={".png, .jpg, .jpeg"}/>
                    </Form.File>
                </Col>
                <Col xs={12} md={6}>
                    <h4>Target image</h4>
                    <ImageContainer sourceFile={targetFile}/>
                    <Form.File id="target-file" custom>
                        <Form.File.Label>{targetFileLabel}</Form.File.Label>
                        <Form.File.Input onChange={(e: any) => setTarget(e.target.files)}
                                         accept={".png, .jpg, .jpeg"}/>
                    </Form.File>
                </Col>
            </Row>
            <Button variant={"success"}>Start</Button>
        </Container>
    );

    function setSource(files: any) {
        if (files.length > 0) {
            setSourceFileLabel(files[0].name)
            setSourceFile(URL.createObjectURL(files[0]))
        } else {
            setSourceFileLabel("Source image")
            setSourceFile("")
        }

    }

    function setTarget(files: any) {
        if (files.length > 0) {
            setTargetFileLabel(files[0].name)
            setTargetFile(URL.createObjectURL(files[0]))
        } else {
            setTargetFileLabel("Target image")
            setTargetFile("")
        }
    }

}


export default MorphingPage;
