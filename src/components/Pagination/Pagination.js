
import React, { Fragment } from "react";
import { Button } from "antd";

const Pagination = ({ increment, decrement, page }) => {

	return (
		<Fragment>
			<div className="pagination">
				<Button variant="outlined" className="current" onClick={decrement} >Anterior</Button>
				{/* <Button variant="contained" className="current">
					{page}
				</Button> */}
				<Button variant="outlined" className="current" onClick={increment} >Siguiente</Button>
			</div>
		</Fragment>
	);
}

export default Pagination;