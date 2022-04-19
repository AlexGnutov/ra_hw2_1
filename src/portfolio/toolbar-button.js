import PropTypes from "prop-types";

function ToolbarButton(props) {
    const {caption, selected, onSelectFilter } = props;

    const onClickHandler = event => {
        onSelectFilter(caption);
    }

    return (
        <button className={
            selected === caption?
                'toolbar-button toolbar-button-selected'
                : 'toolbar-button'
        } onClick={onClickHandler}>{caption}</button>
    )
}

ToolbarButton.propsTypes = {
    selected: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
}

export default ToolbarButton;