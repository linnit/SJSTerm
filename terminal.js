
$('.active').focus();

var cursorPosition = [0,0];
var user = "ryan";
var hostname = "tim";
var exitStatus = 0;

var filesytemTable = {
	0 : "tim",
	1 : "RyanOS Linux release 1.0.1 (Core)",
	2 : "This is a test file\nTest Test Test",
	3 : "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\
xsBNBFiOLzMBCADOff8IZQx/SS4ASBTKOZBmfo8IScElprMC6BjFvVSKIG+J\n\
pd4LlDPDXOtJ+8ZijqMqkyuuqURFwRbpDR1sBTUk3E7lKmLTiPZjubEoQPCO\n\
UC6p3r0yl6Vf891o6yyAl0PZMT95cPiKEuHuBbAYN08qNmZ6JScsVvfSBraV\n\
ZeJW2byTfnaKwe4CatnkfAbnSY6HaN0A7DRNny4uzTAETj18Ht2abBVuTVAC\n\
2fBWmx8q4gS6ZsVc8q5eDhGdmHSAc5Vg5GkmdsolWMYWdc25b8fJPPJDcOUd\n\
FdLwC3fdvez6RKUrrA04MsG54Bs+50CmgJRkVwSZWAbQ9f9hZK3jdHtPABEB\n\
AAHNLWxpbm5pdEBwcm90b25tYWlsLmNvbSA8bGlubml0QHByb3Rvbm1haWwu\n\
Y29tPsLAdQQQAQgAKQUCWI4vNAYLCQcIAwIJEE5R9o8K1Eq/BBUIAgoDFgIB\n\
AhkBAhsDAh4BAABJ9Qf7BDn3MS4HR7esPEfiibGHjUFHpPa/lsa1+ZJaPKiu\n\
6CNGN1OxIUMmEiOn8s8FDQplkgnMaqPOVkGFgffevjisiqDwUVBwF+LIkxev\n\
ysr3XfysP30N3O143qfJBNmg4imY653hMi2tyrrB3NPlRfUa7Q0UHRtwhrcO\n\
qpqn9bOa021SUnTLY4ILj+urMpEWL87ImeE4qCld1aay/SUQHTUkL7rtryuO\n\
Nm6ZG1SRN2euJvX16s4XEVp52Hy7JPLzYOwQo4raW2VZyp+h5+7GVEkvydo7\n\
FJfjSOGQl9mK9gFEaojrEERY69Hc4McXDg+DpLlpYa7kHaEOHkIDAwWYKqHj\n\
DM7ATQRYji8zAQgAoScG4OwfEezF8llVju1zJwQNtN8umuH/4GqjQ/Z7buxh\n\
swxdv5itVMVP4nkl+ukxdhK57VKySWtJ4Ut0ExNmtAzEhI1kg3j7U9/+vScJ\n\
Gfx9ihkoDQLC97YEIQb5BwkhaEcuivPV+ywpD4hFc/nIAeqI+xuuudjguar7\n\
r9s2WBhYTS9t1+SCdFEiIPLUAu24KdOcJrAfXiK0YeeoQ/cX/cMH/3tIpiks\n\
Z0w0d4YebflGCB7V+epPeE+d0SdEnOON9XzgC5h0RIO4rAEpQGQZ/90bCuhG\n\
jWfOhtzBPPSs+JU6UyzwIvIGGuGqXipeagDYKyQZfcAaw6oHEvnQyNSavQAR\n\
AQABwsBfBBgBCAATBQJYji80CRBOUfaPCtRKvwIbDAAAGmEIAKCYMLyXO3HZ\n\
wMuvyWXnZ4311eoqWOZvFmm05sFM2eitDvRFSF+T7RkxGHSf0bVvt5nhpizB\n\
TYMft8h1Qb0vRtVU09pPsbIPeeKx0DQVmjqBCdsisSBdXD1Gxe++AvpIfMRm\n\
nj+1osGXTrmNb6dqJPTnywfBsNrdI9hUp1yvxLgk+61vQDnKAqKnc8nvd4rr\n\
5shrI/99IdF7ku8aFZNzZgfW8y2A/wA7slfUw8yuqbV++2rMXqxcK+2MhORX\n\
DNapP3PG5FdhCkWrsIzpd/Q6HRbEC087cOZ/9igQOJdztstHjCbhlME6J1Gs\n\
ivdE5tDRduEYPMjfK+p3VHoNivZS7XQ=\n\
\n\
=PL6b\n\
\n\
-----END PGP PUBLIC KEY BLOCK-----\n\
",
	4 : "This is a test file\n",
	5 : "Another test file",

}
var filesystem = {
	"/" : {
		"etc" : {
			"hostname" : 0,
			"release" : 1,
		},
		"home" : {
			"testfile" : 2,
			"ryan" : {
				"pgpkey" : 3,
				"test" : 4,
				"test2": 5,
			}
		},
		"root" : {
		}
	}
}

var users = {
	"ryan" : [ "/home/ryan" ],
	"root" : [ "/root" ],
}

var commands = {
	"help"		: "execHelp",
	"clear"		: "execClear",
	"cat"		: "execCat",
	"cd"		: "execCd",
	"hostname"	: "execHostname",
	"history"	: "execHistory",
	"ls"		: "execLs",
	"pwd"		: "execPwd",
	"test"		: "execTest",
};

var cwd = users[user][0];

var commandHistory = [];

$(function(){
	$('.term').append('<code>['+user+'@'+hostname+' ~]# <span class="active_command"></span><span class="cursor">_</span></code>');

	$(document).on('click', function() {
		$('.active').focus();
	});

	$('.pgp').on('click', function() {
		$('.active').val("cat /home/ryan/pgpkey");
		cursorMove("cat /home/ryan/pgpkey".length);
	});

	$(document).keydown(function(event){
		//console.log("KeyCode", event.keyCode);

		switch (event.keyCode) {
			case 13:
				// Return
				$('.cursor').remove();
				$('.active_command').addClass('oldCommand');
				$('.active_command').removeClass('active_command');

				if ($('.active').val().length !== 0) {
					output = parseCommand($('.active').val());
					commandHistory.push($('.active').val());

					cursorPosition[1] = commandHistory.length;
					cursorPosition[0] = 0;
				
					if (output) {
						$('.term').append('<code style="white-space: pre-wrap;">'+output+'</code>');
					}
				}

				if (cwd === users[user][0]) {
					pscwd = "~";
				} else {
					pscwd = cwd;
				}

				$('.term').append('<code>['+user+'@'+hostname+' ' +pscwd+ ']# <span class="active_command"></span><span class="cursor">_</span></code>');
				$('.term').scrollTop($('.term')[0].scrollHeight);

				$('.active').val('');
				break;
			case 37:
				// Left arrow
				cursorMove(-1);
				break;
			case 38:
				// Up arrow
				// [TODO] If we up down, then back down, remove this from history
				if (cursorPosition[1] === commandHistory.length) {
					commandHistory.push($('.active').val());
				}
			
				if (cursorPosition[1] > 0) {
					stuff = commandHistory[--cursorPosition[1]];
					console.log(stuff);

					movement = stuff.length - $('.active').val().length;
					console.log("New: ", stuff.length, "Current: ", $('.active').val().length);
					console.log("Movement: ", movement);

					$('.active').val(stuff);

					cursorMove(movement);
				}

				break;
			case 39:
				// Right arrow
				cursorMove(1);
				break;
			case 40:
				// Down arrow
				console.log("Down");
				if (cursorPosition[1] < commandHistory.length-1) {
					stuff = commandHistory[++cursorPosition[1]];
					console.log(stuff);
					movement = stuff.length - $('.active').val().length;

					$('.active').val(stuff);

					cursorMove(movement);
				}
				break;
			case 46:
				// Delete
				setTimeout(function(){
					cursorMove(0);
				}, 1);
				break;
			case 8:
				// Backspace
				setTimeout(function(){
					cursorPosition[0]--;
					cursorMove(0);
				}, 1);
				break;
			case 9:
				// Tab
				console.log("Tab!");
				tabComplete();
				break;
			default:
				if (event.keyCode === 0 || (event.keyCode >= 32 && event.keyCode <= 222)) {
					setTimeout(function(){
						cursorPosition[0]++;
						cursorMove(0);
					}, 1);
				}
				break;
		}
	});

	$('.active').focusout(function() {
		setTimeout(function() {
			$('.active').focus();
		}, 1);
	});

});

function cursorMove(direction) {
	command = $('.active').val();

	//if (command == "") {
	//	setTimeout(function() {
	//		command = $('.active').val();
	//	}, 1000);
	//}

	if (/</.test(command)) {
		command = command.replace(/</g, "&lt;");
	}

	length = getCommandLength(command);

	cursorPosition[0] = cursorPosition[0] + direction;

	if (cursorPosition[0] < 0) {
		cursorPosition[0] = 0;
		return false;
	}

	if (cursorPosition[0] > length) {
		cursorPosition[0] = length;
		return false;
	}

	if (command.substr(cursorPosition[0], 1).length == 1) {
		$('.cursor').hide();
	} else {
		$('.cursor').show();
	}

	newHtml = getCommandHtml(command, cursorPosition[0]);
	
	$('.active_command').html(newHtml);
}

function getCommandHtml(command, start) {
	lessThanSplit = command.split(/(&lt;)/g);

	var charSplit = [];

	lessThanSplit.forEach(function(element, index) {
		if (element !== "&lt;") {
			charSplit = charSplit.concat(element.split(""));
		} else {
			charSplit.push(element);
		}
	});

	commandBeforeCurs = charSplit.slice(0, cursorPosition[0]).join("");
	commandInCursor = charSplit.slice(cursorPosition[0], cursorPosition[0]+1).join("");
	commandAfterCurs = charSplit.slice(cursorPosition[0] + 1).join("");

	newHtml = commandBeforeCurs + '<span class="onCursor">' + commandInCursor + '</span>' + commandAfterCurs;
	return newHtml;
}

function getCommandLength(command) {
	lessThanSplit = command.split(/(&lt;)/g);

	var charSplit = [];

	lessThanSplit.forEach(function(element, index) {
		if (element !== "&lt;") {
			charSplit = charSplit.concat(element.split(""));
		} else {
			charSplit.push(element);
		}
	});

	return charSplit.length;
}


function parseCommand(command) {
	command = command.split(' ');
	if (typeof window[commands[command[0]]] === "function") {
		return window[commands[command[0]]](command);
	} else {
		return command[0] + " :command not found";
	}
}

function execHelp() {
	var helpText = "You want help? \
		\n \
		\n \
		help: list commands\n \
		clear: clear the terminal screen\n \
		cat: Concatenate FILE(s)\n \
		cd: Change directory\n \
		history: display the command history list with line numbers\n \
		hostname: display hostname or set hostname\n \
		ls: list directory contents\n \
		pwd: print name of current/working directory";

	exitStatus = 0;
	return helpText;
}

function execClear() {
	exitStatus = 0;
	$('.term').html('');
}

function execPwd(args) {
	exitStatus = 0;
	return cwd;
}

function execLs(args) {
	output = "";

	if (args.length === 1) {
		a = readFile(cwd);
		output += Object.keys(a).join(" ") + "\n";
	} else if (args.length > 1) {
		for (i = 1; i < args.length; i++) {
			a = readFile(args[i]);

			if (a[0] === 1) {
				output += "ls: cannot access " + args[i] + ": No such file or directory\n";
			} else {
				if (typeof a[1] === "object") {
					if (args.length > 2) {
						output += args[i] + ":\n";
					}
					output += Object.keys(a[1]).join(" ") + "\n";
				} else {
					output += args[i];
				}
			}
		}
	}

	return output;
}

function readFile(file) {
	exitStatus = 0;

	file = getFullFilePath(file);

	filePath = file.split('/');

	cfs = filesystem["/"];
	filePath.forEach(function(element, index) {
		if (index !== 0 && element !== "") {
			cfs = cfs[element];
		}
	});

	if (cfs !== undefined) {
		if (typeof cfs === "object") {
			return cfs;
		} else {
			data = filesytemTable[cfs];
			return data;
		}
	} else {
		exitStatus = 1;
	}
}

function execTest(args) {
	writeFile("/home/ryan/test", "TestStuff");
}

function writeFile(file, data) {
	file = getFullFilePath(file);

	filePath = file.split('/');

	cfs = filesystem["/"];
	filePath.forEach(function(element, index) {
		if (index !== 0 && element !== "") {
			cfs = cfs[element];
		}
	});

	if (cfs !== undefined) {
		if (typeof cfs !== "object") {
			filesytemTable[cfs] = data;
			return [0, data];
		}
	} else {
		return [1];
	}

}

function getFullFilePath(file) {
	if (!/^\.?\.?\//g.test(file)) {
		file = cwd + '/' + file;
	} else if (/^\.\//g.test(file)) {
		file = cwd + '/' + file.split('/').slice(1);
	} else if (/^\.\.\//g.test(file)) {
		file = cwd.split('/').splice(0, cwd.split('/').length-1).join('/') + '/' + file.split('/').slice(1);
	}

	return file;
}

function execCat(args) {
	status = 0;
	output = "";

	args.forEach(function(element, index) {
		if (index !== 0) {
			file = readFile(element);
			if (exitStatus === 0) {
				output += file;
			} else {
				output += "cat: " + element + ": No such file or directory";
				status = 1;
			}
		}
	});
	
	exitStatus = status;

	return output;
}

function execCd(args) {
	status = 0;

	if (args.length === 1) {
		cwd = users[user][0];
	} else {
		if (typeof readFile(args[1]) === "object") {
			exitStatus = status;
			cwd = args[1];
		} else {
			exitStatus = 1;
			return "cd: " + args[1] + ": No such file or directory";
		}
	}
}

function execHistory(args) {
	historyOutput = "";

	commandHistory.forEach(function(element, index) {
		historyOutput += index + " : " + element + "\n";
	});

	exitStatus = 0;
	return historyOutput;
}

function execHostname(args) {
	if (args[1] === undefined || args[1].length === 0) {
		exitStatus = 0;
		return hostname;
	} else if (/[\w\d\.-]+/g.test(args[1])) {
		setHostname(args[1]);
		exitStatus = 0;
	} else {
		exitStatus = 1;
		return "hostname: the specified hostname is invalid";
	}
}

function setHostname(arg) {
	hostname = arg;
	writeFile("/etc/hostname", arg);
}

// [TODO] Finish this..
function tabComplete() {
	command = $('.active').val();
	command = command.split(' ');

	if (command.length === 1) {
		console.log("Suggest a command");
		possibleCommands = [];
		Object.keys(commands).forEach(function(element) {
			if (element.indexOf(command[0]) === 0) {
				possibleCommands.push(element);
				console.log(element);
			}
		});


		if (possibleCommands.length === 1) {
			movement = possibleCommands[0].length - command[0].length;

			$('.active').val(possibleCommands[0]);
			cursorMove(movement);
		}
	} else {
		console.log("Suggest a file");
		last = command.length;
		partial = command[last];

		//..
	}

	console.log(command);
}
