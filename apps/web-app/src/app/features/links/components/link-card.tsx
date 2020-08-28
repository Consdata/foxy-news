import {
  Button as MaterialButton,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  MenuItem,
  Select,
  TextField as MaterialTextField,
  Typography
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Category} from '../state/category';
import {Link} from '../state/link';

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

const TextField = styled(MaterialTextField)`
  margin-bottom: 8px;
`;

const FavBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const LinkCard = ({link, categories, onDelete, onAddToNewsletter, onEdit}: { link: Link, categories: Category[], onDelete: () => void, onAddToNewsletter: () => void, onEdit: (link: Link) => void }) => {
  const [edit, setEdit] = useState(false);
  const [summary, setSummary] = useState(link.data.summary);
  const [href, setLink] = useState(link.data.link);
  const [description, setDescription] = useState(link.data.description);
  const [category, setCategory] = useState(link.data.category);
  const onSave = () => {
    onEdit({
      ...link,
      data: {
        ...link.data,
        summary,
        link: href,
        description,
        category
      }
    });
    setEdit(false);
  };
  return <StyledCard>
    {!edit && <>
      <CardHeader title={link.data.summary} subheader={`by ${link.data.author} in ${link.data.category}`}/>
      <CardContent>
        <div>
          <Typography variant="body2">
            {link.data.description}
          </Typography>
        </div>
        <div>
          <Typography variant="caption">
            <a href={link.data.link} target="_blank">{link.data.link}</a>
          </Typography>
        </div>
        <FavBar>
          <FavoriteBorderOutlinedIcon color="secondary" /> &nbsp; {link.votes}
        </FavBar>
      </CardContent>
    </>}
    {edit && <>
      <CardContent>
        <TextField fullWidth value={summary} onChange={event => setSummary(event.target.value)}/>
        <TextField fullWidth value={href} onChange={event => setLink(event.target.value)}/>
        <TextField fullWidth multiline value={description} onChange={event => setDescription(event.target.value)}/>
        <Select fullWidth value={category} onChange={change => setCategory(change.target.value as string)}>
          {categories.map(category => <MenuItem key={category.key} value={category.key}>{category.label}</MenuItem>)}
        </Select>
      </CardContent>
    </>}
    <CardActions>
      {!edit && <Button size="small" color="primary" onClick={onAddToNewsletter}><ShoppingBasketOutlinedIcon/></Button>}
      <Spacer/>
      {!edit && <Button size="small" color="primary" onClick={() => setEdit(true)}><EditOutlinedIcon/></Button>}
      {edit && <Button size="small" color="primary" onClick={onSave}><SaveOutlinedIcon/></Button>}
      {edit && <Button size="small" color="secondary" onClick={() => setEdit(false)}><ClearIcon/></Button>}
      {!edit && <Button size="small" color="secondary" onClick={onDelete}><DeleteOutlineOutlinedIcon/></Button>}
    </CardActions>
  </StyledCard>;
};
