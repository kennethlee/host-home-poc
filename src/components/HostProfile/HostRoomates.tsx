import * as React from "react";
import { Link } from 'react-scroll'
import { makeStyles } from "@material-ui/core/styles";
import { Housemate } from '../../models/Housemate';

const useStyles = makeStyles(() => ({
  roomatesContainer: {
    border: '1px hidden red',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    border: '1px hidden pink',
    fontSize: '24px',
    padding: '10px 0',
  },
  roomates: {
    border: '1px hidden blue',
    flexGrow: 1,
    paddingTop: '10px',
  },
  moreInfo: {
    border: '1px hidden green',
  },
}));

interface IHostRoomatesProps {
  roomates: Array<Housemate>;
}

const HostRoomates = ({
  roomates,
}: IHostRoomatesProps) => {
  const classes = useStyles();

  return (
    <div className={classes.roomatesContainer}>
      <div className={classes.title}>
        The Roomates
      </div>

      <div className={classes.roomates}>
        {roomates.map((roomate: Housemate) => {
          return (
            <div key={roomate.name}>
              {roomate.name}, {roomate.age}, {roomate.relationship}
            </div>
          )
        })}
      </div>

      <div className={classes.moreInfo}>
        <Link
          activeClass="active"
          to="additionalInfo"
          spy={true}
          smooth={true}
          duration={500}
        >
          <a href="#">
            more about your host
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HostRoomates;