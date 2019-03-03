import React from 'react'
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape'){
            props.handleClear()
        }

    }
    return (
        <div role="form" className="todoForm">
            <Grid cols='12 9 9'>
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description} />
            </Grid>

            <Grid cols='12 3 3'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='trash-o' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}
