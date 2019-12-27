# matthewiannucci.com

My personal website, blog, and portfolio

## Developing

```bash
virtualenv -p python3 env
source env/bin/activate
pip install -r requirements.txt
```

then you can run the webapp locally

```bash
python main.py
```

## Deploying

```bash
gcloud --project=mpiannucci app deploy
```