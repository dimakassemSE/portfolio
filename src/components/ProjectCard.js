import { Col } from "react-bootstrap";
import githup from '../asserts/icon/github.svg';
import preview from '../asserts/icon/preview.svg';
import LinkWithIcon from "./LinkWithIcon";
export const ProjectCard = (props) => {
    const { title, description
        , imgUrl, projectLink = null, githupLink = null,
    } = props
    return (
        <Col md={6} lg={4}>
            <div className="project-img-box" >
                <img src={imgUrl} className="h-100 w-100" /> :
                <div className="project-info">
                    <div>
                        <h4>{title}</h4>
                        <span>{description} </span>
                    </div>
                    {
                        githupLink ? <div className="project-links">
                            <LinkWithIcon href={githupLink} src={githup} alt='githup' />
                            <LinkWithIcon href={projectLink} src={preview} alt='website' />

                        </div> : <></>
                    }

                </div>

            </div>
        </Col>
    )
}