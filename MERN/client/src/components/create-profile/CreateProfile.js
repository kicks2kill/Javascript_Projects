import React, { Component } from 'react'
import {  connect  } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';


 class CreateProfile extends Component {
     constructor(props){
        super(props);
        this.state = {
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        }
     }

     onSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
     }

     onChange = (e) => {
         this.setState({[e.target.name]: e.target.value});

     }
  render() {
      const {  errors, displaySocialInputs  } = this.state;
      
    let socialInputs;
    
    if(displaySocialInputs) {
        socialInputs = (
            <div>
                <InputGroup 
                    placeholder="Twitter Profile URL"
                    name="twitter"
                    icon= "fab fa-twitter"
                    value={this.state.twitter}
                    onChange = {this.onChange}
                    error={errors.twitter}
                />

                 <InputGroup 
                    placeholder="Facebook Profile URL"
                    name="facebook"
                    icon= "fab fa-facebook"
                    value={this.state.facebook}
                    onChange = {this.onChange}
                    error={errors.facebook}
                />

                 <InputGroup 
                    placeholder="Linkedin Profile URL"
                    name="linkedin"
                    icon= "fab fa-linkedin"
                    value={this.state.linkedin}
                    onChange = {this.onChange}
                    error={errors.linkedin}
                />

                 <InputGroup 
                    placeholder="Youtube Profile URL"
                    name="youtube"
                    icon= "fab fa-youtube"
                    value={this.state.youtube}
                    onChange = {this.onChange}
                    error={errors.youtube}
                />

                 <InputGroup 
                    placeholder="Instagram Profile URL"
                    name="instagram"
                    icon= "fab fa-instagram"
                    value={this.state.instagram}
                    onChange = {this.onChange}
                    error={errors.instagram}
                />
            </div>
        )
    } 
    //select options for status
      const options = [
          { label: '* Select Professional Status', value: 0},
          { label: 'Developer', value: 'Developer'},
          { label: 'Senior Developer', value: 'Senior Developer'},
          { label: 'Manager', value: 'Manager'},
          { label: 'Student', value: 'Student' },
          { label: 'Instructor', value: 'Instructor'},
          { label: 'Intern', value: 'Intern'},
          { label: 'Other', value: 'Other'}
      ];
    return (
      <div className="create-profile">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Create Your Profile</h1>
                    <p className="lead text-center">
                        Let's get some information to make your profile stand out
                    </p>
                    <small className="d-block pb-3">* = required fields</small>
                    <form onSubmit={this.onSubmit}>
                        <TextFieldGroup 
                            placeholder = " * Profile Handle"
                            name = "handle"
                            value = {this.state.handle}
                            onChange = {this.onChange}
                            error = {errors.handle}
                            info = "A unique handle for your profile URL"
                        />

                        <SelectListGroup 
                            placeholder = "Status"
                            name = "status"
                            value = {this.state.status}
                            onChange = {this.onChange}
                            error = {errors.status}
                            options = {options}
                            info = "Your professional title"
                        />

                        <TextFieldGroup 
                            placeholder = "Company"
                            name = "company"
                            value = {this.state.company}
                            onChange = {this.onChange}
                            error = {errors.company}
                            info = "Where you work"
                        />

                        <TextFieldGroup 
                            placeholder = "Website"
                            name = "website"
                            value = {this.state.website}
                            onChange = {this.onChange}
                            error = {errors.website}
                            info = "Any professional website that promotes yourself"
                        />

                        <TextFieldGroup 
                            placeholder = "Location"
                            name = "location"
                            value = {this.state.location}
                            onChange = {this.onChange}
                            error = {errors.location}
                            info = "City and state"
                        />

                        <TextFieldGroup 
                            placeholder = "* Skills"
                            name = "skills"
                            value = {this.state.skills}
                            onChange = {this.onChange}
                            error = {errors.skills}
                            info = "Skills that may set you apart from others, please use comma separated values"
                        />

                        <TextFieldGroup 
                            placeholder = "Github Username"
                            name = "githubusername"
                            value = {this.state.githubusername}
                            onChange = {this.onChange}
                            error = {errors.githubusername}
                            info = "Your github link if you want to show off your latest repos"
                        />

                        <TextAreaFieldGroup 
                            placeholder = "Short Bio"
                            name = "bio"
                            value = {this.state.bio}
                            onChange = {this.onChange}
                            error = {errors.bio}
                            info = "Tell us about yourself"
                        />

                        <div className="mb-3">
                            <button onClick={() => { this.setState(prevState => ({
                                displaySocialInputs: !prevState.displaySocialInputs
                            }))}} classsName="btn btn-light" > 
                                Add Social Network links
                            </button>
                            <span className="text-muted">Optional</span>
                        </div>
                        {socialInputs}
                        <input type="submit" value="Submit" className="btn btn-info btn-block mt-4"/>                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps)(CreateProfile);