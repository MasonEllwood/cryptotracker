import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Containers
import SidebarLeft from '../SidebarLeft';
import SidebarRight from '../SidebarRight';

// Material UI
import { withStyles } from '@material-ui/core/styles';

// Styles
import styles from './styles';

const Main = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar, classes.appBarShift)}>
                <Toolbar>
                    <Typography variant="p" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <SidebarLeft />
            <main className={(classes.content, classes.contentShift)}>
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at
                    ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
                    convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
                    sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
                    quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
                    commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue
                    eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi
                    etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare
                    suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum
                    eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
                    ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus
                    orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et.
                    Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
                    ultrices sagittis orci a.
                </Typography>
            </main>
            <SidebarRight />
        </div>
    );
};

export default withStyles(styles)(Main);
