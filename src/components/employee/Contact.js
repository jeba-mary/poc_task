import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-info">
        <div className="container-fluid">
          <form>
              <div class="form-group">
                <label for="contact-number">Phone</label>
                <input type="text" class="form-control" placeholder="Phone Number" id="contact-number"/>
              </div>
              <div className="text-center">
								<button type="submit" className="btn">Save</button>
							</div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact