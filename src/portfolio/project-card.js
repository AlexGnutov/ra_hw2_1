import PropTypes from "prop-types";

function ProjectCard(props) {
    const { img, category } = props;

    return (
        <div className={'project-card'}>
            <img className={'project-card-image'} src={img} alt={category + '-image'}/>
        </div>
    )
}

ProjectCard.propsTypes = {
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}

export default ProjectCard;