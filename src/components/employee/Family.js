import React from 'react';

class Family extends React.Component {
  render() {
    return (
      <div className="family-info">
        <div className="container-fluid">
          <form>
              <div class="form-group">
                <label for="father_name">Father Name</label>
                <input type="text" class="form-control" id="father_name"/>
              </div>
              <div class="form-group">
                <label for="mother_name">Mother Name</label>
                <input type="text" class="form-control" id="mother_name"/>
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

export default Family;