import PropTypes from 'prop-types';
import ToolbarButton from "./toolbar-button";

function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;

    return (
        <div>
            <>{filters.map(filter =>
                <ToolbarButton
                    selected={selected}
                    key={filter} caption={filter}
                    onSelectFilter={onSelectFilter}
                />
            )}</>
        </div>
)
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
}

export default Toolbar;