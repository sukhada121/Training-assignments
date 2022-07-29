#include <bits/stdc++.h>
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <sstream>
using namespace std;

class PersonData
{

public:
    vector<string> details;

    vector<string> readFile(const string &fileName)
    {
        ifstream source;
        source.open(fileName);
        vector<string> lines;
        string line;

        while (getline(source, line))
        {
            lines.push_back(line);
        }
        return lines;
    }

    void initializeFileData(string inputFile)
    {
        vector<string> fileData;
        fileData = readFile(inputFile);
        details = fileData;
    }

    void printData()
    {

        for (auto i : details)
            cout << i << endl;
    }

    string removeSpaces(string s)
    {
        s.erase(remove(s.begin(), s.end(), ' '), s.end());
        return s;
    }

    vector<vector<string>> getData()
    {

        string lastName, firstName, mname, nick, houseNo, streetAddress, city, state, zip;
        vector<vector<string>> res;
        string lname;
        int len;

        for (auto row : details)
        {

            lastName = row.substr(0, 15);
            lastName = removeSpaces(lastName);

            firstName = row.substr(15, 15);
            firstName = removeSpaces(firstName);

            mname = row.substr(30, 15);
            mname = removeSpaces(mname);

            nick = row.substr(45, 10);
            nick = removeSpaces(nick);

            houseNo = row.substr(55, 5);
            houseNo = removeSpaces(houseNo);

            streetAddress = row.substr(60, 20);
            streetAddress = removeSpaces(streetAddress);

            city = row.substr(80, 15);
            city = removeSpaces(city);

            state = row.substr(95, 15);
            state = removeSpaces(state);

            zip = row.substr(110, 6);
            zip = removeSpaces(zip);

            string name = firstName + " " + lastName;
            string address1 = houseNo + " " + streetAddress;
            string address2 = city + ", " + state + " " + zip;

            vector<string> det;

            det.push_back(name);
            det.push_back(address1);
            det.push_back(address2);

            res.push_back(det);
        }
        return res;
    }

    void envelope_format()
    {

        cout << "\nData in Envelope format:\n";
        vector<vector<string>> result = getData();
        for (vector<string> vect1D : result)
        {
            for (int s = 0; s < vect1D.size(); s++)
            {

                cout << vect1D[s];
                if (s != 2)
                {
                    cout << ",";
                }
                cout << "\n";
            }
        }
    }

    void fixed_format()
    {

        vector<vector<string>> result = getData();
        string s;
        cout << "\nData in Fixed format:\n";
        for (vector<string> vect1D : result)
        {
            for (int k = 0; k < vect1D.size(); k++)
            {
                s = vect1D[k];
                // adding white spaces to remaining length
                if (k == 0)
                {
                    cout << s;
                    int len = s.length();
                    for (int i = 0; i < 30 - s.length(); i++)
                    {
                        cout << " ";
                    }
                }
                else if (k == 1)
                {
                    cout << s;
                    int len = s.length();
                    for (int i = 0; i < 25 - s.length(); i++)
                    {
                        cout << " ";
                    }
                }
                else
                {
                    cout << s;
                    int len = s.length();
                    for (int i = 0; i < 36 - s.length(); i++)
                    {
                        cout << " ";
                    }
                }
            }

            cout << endl;
        }
    }

    void fixed_csv()
    {

        cout << "\nData in Fixed CSV format:\n";
        vector<vector<string>> result = getData();
        for (vector<string> vect1D : result)
        {
            for (int s = 0; s < vect1D.size(); s++)
            {

                cout << vect1D[s];
                if (s != 2)
                {
                    cout << ",";
                }
            }
        }
    }
};

int main(int argc, char **argv)
{
    // command to run code: ./app --inputFile sample_input.in --output_format envelope
    string inputFile = " ";
    string format = " ";

    if (argv[1])
    {
        inputFile = argv[2];
    }
    if (argv[3])
    {
        format = argv[4];
    }

    PersonData d1;
    d1.initializeFileData(inputFile);

    // d1.printData();
    if (format == "envelope")
    {
        d1.envelope_format();
    }
    else if (format == "fixed_length")
    {
        d1.fixed_format();
    }
    else
    {
        d1.fixed_csv();
    }

    return 0;
}