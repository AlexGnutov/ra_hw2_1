import Toolbar from './toolbar';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProjectsList from './projects-list';

function Portfolio(props) {
    const {filters, selected, projects} = props;
    const [state, setState] = useState(selected);

    const onSelectFilter = filter => {
        setState(filter);
    }

    return (
        <>
            <Toolbar filters={filters} selected={state} onSelectFilter={onSelectFilter}/>
            <div className={'projects-list'}>
                <ProjectsList projects={state === 'All' ? projects : projects.filter(o => o.category === state)}/>
            </div>
        </>
    )
}

Portfolio.propsTypes = {
    filters: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
}

export default Portfolio;