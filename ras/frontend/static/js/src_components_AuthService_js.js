/*! For license information please see src_components_AuthService_js.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_AuthService_js"],{"./src/components/AuthService.js":()=>{eval("const AuthService = () => {\n  const setToken = idToken => {\n    localStorage.setItem('token', idToken);\n  };\n  const getToken = () => {\n    return localStorage.getItem('token');\n  };\n  const login = (username, password) => {\n    return fetch(`http://localhost:8000/api/auth/login?username=${username}&password=${password}`, {\n      method: 'POST',\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        username,\n        password\n      })\n    }).then(res => {\n      if (res.user) {\n        localStorage.setItem('id', res.user.id);\n        localStorage.setItem('name', res.user.name);\n        localStorage.setItem('username', res.user.username);\n        localStorage.setItem('email', res.user.email);\n        setToken(res.access_token);\n        return Promise.resolve(res);\n      }\n    });\n  };\n  const logout = () => {\n    localStorage.removeItem('token');\n  };\n};\n\n//# sourceURL=webpack://frontend/./src/components/AuthService.js?")}}]);