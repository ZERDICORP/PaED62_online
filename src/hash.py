def getHash(s):
	sInput = list(s);
	sOutput = list("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

	for j in range(len(sInput)):
		for i in range(len(sOutput)):
			sOutput[i] = chr(((ord(sOutput[i]) * (i + 1)) + (ord(sInput[j]) * (j + 1))) % (126 - 33) + 33);

	return "".join(sOutput);