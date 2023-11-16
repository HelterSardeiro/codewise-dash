/*eslint-disable*/
import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav, Collapse } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Context } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import logo from "logo-white.svg";
import logout from "../../assets/img/power.png"

var ps;

function Sidebar(props) {
  const navigate = useNavigate();

  const { handleLogout } = useContext(Context)

  const [collapseStates, setCollapseStates] = React.useState({});
  const [valueConvert, setValue] = React.useState(0)
  const [openSide, setOpenSide] = useState(true);

  const sidebar = React.useRef();
  const location = useLocation();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  React.useEffect(() => {
    setCollapseStates(getCollapseStates(props.routes));
  }, []);

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });


  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };

  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  };


  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !collapseStates[prop.state];
        return (
          <li
            className={getCollapseInitialState(prop.views) ? "" : ""}
            key={key}
          >
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={collapseStates[prop.state]}
              onClick={(e) => {
                e.preventDefault();
                setCollapseStates(st);
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={`${prop.icon} icon-route`} />
                  <p className="name-route">
                    {prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                <>
                  <span style={{ color: "black" }} className="sidebar-mini-icon">{prop.mini}</span>
                  <span style={{ color: "black" }} className="sidebar-normal">
                    {prop.name}
                    <b className="caret" />
                  </span>
                </>
              )}
            </a>
            <Collapse isOpen={collapseStates[prop.state]}>
              <ul className="nav">{createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }

      return (
        <li className={activeRoute(prop.layout + prop.path)} key={key} style={{ marginLeft: "15px" }}>
          <NavLink to={prop.layout + prop.path} activeClassName="" style={{ marginLeft: "0" }} >
            {prop.icon !== undefined ? (
              <>
                <div className="box-options-side-bar">
                  <p className="name-route">{prop.name}</p>
                </div>
              </>
            ) : (
              <>
                <span className="sidebar-mini-icon">{prop.mini}</span>
                <span className="sidebar-normal">{prop.name}</span>
              </>
            )}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <div className="sidebar" data-color={props.backgroundColor}>
      <div className="logo" style={{ "display": "flex", "flexDirection": "row", cursor: "pointer" }} onClick={() => {
        handleLogout()
        navigate('/auth/login')
      }}>
        <div
          style={{ width: "30px", marginRight: "20px", marginLeft: "10px" }}
        >
          <div className="logo-img">
            <img src={logout} alt="react-logo" />
          </div>
        </div>
        <div
          href="https://www.creative-tim.com?ref=nudr-sidebar"
          className="simple-text logo-normal"
          target="_blank"
        >
          Logout
        </div>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {createLinks(props.routes)}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
