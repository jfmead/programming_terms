import React, { Component } from 'react';
import { Header, Button, Container, Menu } from 'semantic-ui-react';

class Home extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    return (
      <Container> 
      <Menu pointing secondary vertical>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
      </Menu>
      <Header as='h1' textAlign='center'> Programming Terms </Header>
      <Button> Add Word </Button> 
      </Container> 
    );
  }
}

export default Home;
