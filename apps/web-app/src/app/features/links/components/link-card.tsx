import {Category} from '@foxy-news/categories';
import {Button as MaterialButton, Card, CardActions, CardContent, CardHeader, Tooltip} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from '../state/link';
import {LinkEdit} from './link-edit';
import {LinkSummary} from './link-summary';

const StyledCard = styled(Card)`
    width: 100%;
`;

const Button = styled(MaterialButton)`
  min-width: initial;
  padding: 4px 8px;
`;

const Spacer = styled.div`
  flex: 1;
`;

export const LinkCard = ({link, categories, onDelete, onAddToNewsletter, onEdit}: { link: Link, categories: Category[], onDelete: () => void, onAddToNewsletter: (newsletter: string) => void, onEdit: (link: Link) => void }) => {
  const [edit, setEdit] = useState(false);
  const [edited, setEdited] = useState(link);
  const onSave = () => {
    onEdit(edited);
    setEdit(false);
  };
  const toggleEdit = (edit: boolean) => {
    setEdited(link);
    setEdit(edit);
  };
  return <StyledCard>
    {!edit && <>
      <CardContent>
        <LinkSummary link={link}/>
      </CardContent>
    </>}
    {edit && <>
      <CardContent>
        <LinkEdit link={link} categories={categories} onLinkChange={link => setEdited(link)}/>
      </CardContent>
    </>}
    <CardActions>
      {!edit && <>
        {!!link.newsletter && <Button size="small" color="primary" onClick={() => onAddToNewsletter('')}>
          <Tooltip title={`${link.newsletter}`}><ShoppingBasketIcon/></Tooltip>
        </Button>}
        {!link.newsletter && <Button size="small" color="primary" onClick={() => onAddToNewsletter('current')}>
          <ShoppingBasketOutlinedIcon/>
        </Button>}
      </>}
      <Spacer/>
      {!edit && <Button size="small" color="primary" onClick={() => toggleEdit(true)}><EditOutlinedIcon/></Button>}
      {edit && <Button size="small" color="primary" onClick={onSave}><SaveOutlinedIcon/></Button>}
      {edit && <Button size="small" color="secondary" onClick={() => toggleEdit(false)}><ClearIcon/></Button>}
      {!edit && <Button size="small" color="secondary" onClick={onDelete}><DeleteOutlineOutlinedIcon/></Button>}
    </CardActions>
  </StyledCard>;
};
