import React, { Component } from "react";
import "./Explorer.css";


export class ExplorerComponent extends Component {

    // const Requests = [

    // ]
    state = {
        title: 'Add new user',
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'POST',
        body: [
          {
            name: 'email',
            type: 'email',
            max: 24,
            min: 3,
          },
          {
            name: 'full-name',
            type: 'text',
            placeholder: 'John Doe',
            required: true,
          },
          {
            name: 'phone',
            type: 'tel',
            pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
          },
        ]
    }

    onTextChange = (e) => {
        e.preventDefault();

        this.setState({
            title: e.target.title.value,
            url: e.target.url.value,
            method: e.target.url.value,
            body: e.target.body.value
        })
        // setting the state
    }
    
    render() {
        return (
            <div>
                <div className="getButtonContainer">
                    <button className="getButton">GET</button> /All Vehicles
                </div>
                <div className="getButtonContainer">
                    <button className="getButton">GET</button> /Basic Vehicle Info
                </div>
                <div className="getButtonContainer">
                    <button className="getButton">GET</button> /User
                </div>
                <div className="deleteButtonContainer">
                    <button className="deleteButton">DELETE</button> /Disconnect
                </div>
                <div className="getButtonContainer">
                    <button className="getButton">GET</button> /Location
                </div>
                <div className="getButtonContainer">
                    <button className="getButton">GET</button> /Odometer
                </div>
                <div className="getButtonContainer">
                    <button className="getButton">GET</button> /Application Permissions
                </div>
                <div className="postButtonContainer">
                    <button className="postButton">POST</button> /Security
                </div>
                <div className="getButtonContainer">
                    <button className="getButton">GET</button> /Application Permissions
                </div>
                <form onSubmit={this.onTextChange}>
                    <input type='text' id="title" name='title' placeholder='Title' 
                    />
                    <input type='text' id="url" name='url' placeholder='url' />
                    <input type='text' id="method" name='method' placeholder='method' />
                    <input type='text' id="body" name='body' placeholder='body' />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

