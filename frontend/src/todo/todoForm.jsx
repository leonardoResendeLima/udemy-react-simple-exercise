import React from 'react'
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {
    return (
        <div role="form" className="todoForm">
            <Grid cols='12 11 11'>
                <input 
                    type="text" 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange} 
                    value={props.description} />
            </Grid>

            <Grid cols='12 1 1'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            </Grid>
        </div>
    )
}
