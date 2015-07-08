// before

var selectorConfig = { side: 'right' };
if (project.userData && 'languageSelectorConfig' in project.userData && $.type(project.userData.languageSelectorConfig) === 'object') {
    selectorConfig = project.userData.languageSelectorConfig;
}

//after

var selectorConfig =  (project.userData || {}).languageSelectorConfig || {side:'right'};
