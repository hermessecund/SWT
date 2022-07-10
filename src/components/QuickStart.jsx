import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>DeTi/DeFi</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text style={styles.text}>
              Join The DATO {" "}
              <a
                href="https://hermessecund.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                secundworld
              </a>{" "}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text style={styles.text}>
              Install <Text code>Metamask</Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🧰">
            <Text style={styles.text}>
              Buy SW Token{" "}
              <a
                href="https://hermessecund.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                hermessecund
              </a>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💾">
            <Text style={styles.text}>
              Buy space (
              <a
                href="https://hermessecund.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                NFT Tiles
              </a>
              )
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔏">
            <Text style={styles.text}>
              Join Timeverse </Text>{" "}
              and provide your <Text strong>Projects</Text> and{" "}
              <Text strong>NFT</Text> from{" "}
              <a
                href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                hermessecund projects
              </a>
              :
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🔁">
            <Text style={styles.text}>
              Manage your <Text code>Team</Text>
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💿">
            <Text style={styles.text}>
              Install{" "}
              <a
                href="https://hermessecund.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Twatch clock
              </a>{" "}
              needed for the<Text code>{"<InchDex />"}</Text> component
              (optional)
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>Save the world !!</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>secundworld</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Install{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tartime.netlify.app"
                >
                  Twatch
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://hermessecund.com"
                >
                  120 secund ; 60 Binute ; 12 HS
                </a>{" "}
                <Text code> 12 HS Twatch </Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}> 12 Twatch <Text code> Clock</Text> Timestamp 2.0
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                Deploy test contract: <Text code>npm run deploy</Text> on a new
                terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                Open the 📄<Text strong> Contract</Text> tab
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡{" "}
              <Text strong> Connecting your Local Chain to the Moralis DB</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Download{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fatedier/frp/releases"
                >
                  frpc
                </a>{" "}
                and provide missing params in the <Text code>.env</Text> file
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Connect your Moralis Database and Local Chain:{" "}
                <Text code>npm run connect</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                Add contract events you want to watch:{" "}
                <Text code>npm run watch:events</Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
