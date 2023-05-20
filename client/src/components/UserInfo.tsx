import { User } from "../interfaces/User";
import { ListItem, Avatar, ListItemText} from '@mui/material'

export default function UserInfo(props: User) {

    return (
        <ListItem key={props.id}>
            <Avatar alt={props.first_name} src={props.avatar}/>
            <ListItemText primary={props.first_name}/>
            <ListItemText primary={props.last_name}/>
            <ListItemText primary={props.email}/>
            <ListItemText secondary={props.gender}/>
            <ListItemText secondary={props.phone}/>
            <ListItemText secondary={props.address}/>
       </ListItem>
    )
}