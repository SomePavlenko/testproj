import {styled} from '@mui/material/styles'
import {TextField, Toolbar, ListItem} from "@mui/material";

export const TextFieldStyled = styled(TextField)(({theme}) => ({

    width: 281,
    height: 48,
    // padding: 0,
}))


export const ToolbarStyled = styled(Toolbar)(({theme}) => ({

    height: 300,
    // padding: 0,
}))

export const ListItemStyled = styled(ListItem)(({theme}) => ({

    color: "red",
    // padding: 0,
}))