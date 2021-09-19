import { Card, ListGroup } from "react-bootstrap";

import heartIcon from '/src/img/heart.svg';
import heartFillIcon from '/src/img/heartFill.svg';

import './Flat.scss';


export const Flat = ({flat, favorites, handleAddFavorite}) => {

    return (
        <Card className="flat">
            <Card.Body>
                <Card.Title className="flat__title">
                    {flat.attributes.title}
                    {favorites && (favorites.some(favoriteFlat => favoriteFlat.id === flat.id) ? (
                        <span>
                            <img src={heartFillIcon} alt="В понравившихся"/>
                        </span>
                    ) : (
                        <span onClick={handleAddFavorite}>
                            <img src={heartIcon} alt="Добавить в понравившиеся"/>
                        </span>
                    ))}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {flat.relationships.attributes.first_name} {flat.relationships.attributes.last_name}
                </Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>Комнат: {flat.attributes.rooms}</ListGroup.Item>
                    <ListGroup.Item>Площадь: {flat.attributes.area} {flat.attributes.unit}</ListGroup.Item>
                    <ListGroup.Item>
                        Выставил: {flat.relationships.type === 'agent' ? 'агент' : 'собственник'}
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}