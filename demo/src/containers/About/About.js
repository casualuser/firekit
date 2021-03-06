import React, { Component }  from 'react';
import {injectIntl, intlShape} from 'react-intl';
import { Activity } from '../../containers/Activity';
import { withFirebase } from '../../../../src';

class About extends Component {

  componentWillMount(){
    const { watchPath, destroyPath }= this.props;

    watchPath('/users_count');
  }

  componentWillUnmount(){
    const { destroyPath }= this.props;

    destroyPath('/users_count');
  }

  render() {
    const { intl }= this.props;

    return (
      <Activity
        title={intl.formatMessage({id: 'about'})}>
      </Activity>
    );
  }

}

About.propTypes = {
  intl: intlShape.isRequired,
};


export default injectIntl(withFirebase(About));
