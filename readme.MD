
ES6 module:
Two levels embedded Tabs system,
based on https://codepen.io/FelipeMartinin/pen/uFnhf

Example template:
```html
<!DOCTYPE html>
<html>
	<head>
        <meta charset='utf-8'>
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; script-src 'self';">
		<link type='text/css' rel='stylesheet' href='Tabs.css'/>
        <script type='module' src='TabsWrapper.js'></script>
        <script type='module' src='TabsBuilder.js'></script>
        <script type='module' src='Tabs.js'></script>
        <script type='module' src='Main.js'></script>
	</head>
	<body>
        <div class='mainContainer'>
            <div class='mainTabs'>
                <div class='mainTab active'>Tab 1</div>
                <div class='mainTab'>Tab 2</div>
                <div class='mainTab'>Tab 3</div>
                <div class='mainTab'>Tab 4</div>
            </div>
            <div class='mainPanels'>
                <div class='mainPanel'>Panel 1
                    <div class='subContainer subContainer1'>
                        <div class='subTabs'>
                            <div class='subTab active'>Tab 1 Sub Tab 1</div>
                            <div class='subTab'>Tab 1 Sub Tab 2</div>
                            <div class='subTab'>Tab 1 Sub Tab 3</div>
                            <div class='subTab'>Tab 1 Sub Tab 4</div>
                        </div>
                        <div class='subPanels'>
                            <div class='subPanel'>Panel 1 Sub Panel 1</div>
                            <div class='subPanel'>Panel 1 Sub Panel 2</div>
                            <div class='subPanel'>Panel 1 Sub Panel 3</div>
                            <div class='subPanel'>Panel 1 Sub Panel 4</div>
                        </div>
                    </div>
                </div>
                <div class='mainPanel'>Panel 2
                    <div class='subContainer subContainer2'>
                        <div class='subTabs'>
                            <div class='subTab'>Tab 2 Sub Tab 1</div>
                            <div class='subTab active'>Tab 2 Sub Tab 2</div>
                            <div class='subTab'>Tab 2 Sub Tab 3</div>
                            <div class='subTab'>Tab 2 Sub Tab 4</div>
                        </div>
                        <div class='subPanels'>
                            <div class='subPanel'>Panel 2 Sub Panel 1</div>
                            <div class='subPanel'>Panel 2 Sub Panel 2</div>
                            <div class='subPanel'>Panel 2 Sub Panel 3</div>
                            <div class='subPanel'>Panel 2 Sub Panel 4</div>
                        </div>
                    </div>
                </div>
                <div class='mainPanel'>Panel 3
                    <div class='subContainer subContainer3'>
                        <div class='subTabs'>
                            <div class='subTab'>Tab 3 Sub Tab 1</div>
                            <div class='subTab'>Tab 3 Sub Tab 2</div>
                            <div class='subTab active'>Tab 3 Sub Tab 3</div>
                            <div class='subTab'>Tab 3 Sub Tab 4</div>
                        </div>
                        <div class='subPanels'>
                            <div class='subPanel'>Panel 3 Sub Panel 1</div>
                            <div class='subPanel'>Panel 3 Sub Panel 2</div>
                            <div class='subPanel'>Panel 3 Sub Panel 3</div>
                            <div class='subPanel'>Panel 3 Sub Panel 4</div>
                        </div>
                    </div>
                </div>
                <div class='mainPanel'>Panel 4
                    <div class='subContainer subContainer4'>
                        <div class='subTabs'>
                            <div class='subTab'>Tab 4 Sub Tab 1</div>
                            <div class='subTab'>Tab 4 Sub Tab 2</div>
                            <div class='subTab'>Tab 4 Sub Tab 3</div>
                            <div class='subTab active'>Tab 4 Sub Tab 4</div>
                        </div>
                        <div class='subPanels'>
                            <div class='subPanel'>Panel 4 Sub Panel 1</div>
                            <div class='subPanel'>Panel 4 Sub Panel 2</div>
                            <div class='subPanel'>Panel 4 Sub Panel 3</div>
                            <div class='subPanel'>Panel 4 Sub Panel 4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</body>
</html>
```

