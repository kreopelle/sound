import React, { Component } from 'react'

const CreateSoundForm = () => {

  return(
    <form onSubmit={this.handleOnSubmit}>
      <label>create sound: </label>
      <input type="text" name="title" id="title" placeholder="title" onChange={this.handleOnChange} value={this.state.title} />
      <input type="text" name="description" id="description" placeholder="description" value={this.state.description} onChange={this.handleOnChange} />
      <input type="file" name="file" id="file" onChange={this.handleUpload} />
      <input type="submit" />
    </form>
  )
}

export default CreateSoundForm
