import React from 'react';
// import { FooterStyled } from '../../styles/styles';
import { Link } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';


const Footer = () => (
    <Segment style={styles.footer}>
      <Grid columns={2}>
        <Grid.Column textAlign='left'>
          <h5 style={styles.text}>
            <i style={{fontWeight: '300'}}>Designed by DevPoint Studios</i>
          </h5>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Link to='/' style={styles.leftNav}>
            <h5 style={{fontWeight: '300'}}>
              Home 
            </h5>
          </Link>
          &nbsp;
          <Link to='/' style={styles.leftNav}>
            <h5 style={{fontWeight: '300'}}>
              Support
            </h5>
          </Link>
        </Grid.Column>
      </Grid>
    </Segment>
)

const styles = {
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '60px',   /* Height of the footer */
    background: '#6cf'
 
  },
  container: {
    padding: '0',
  },
  text: {
    color: 'white',
  },
  leftNav: {
    display: 'inline-block',
    color: 'white',
  },
  icons: {
    display: 'inline-block',
  },
}


export default Footer;
