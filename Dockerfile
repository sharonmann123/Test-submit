# Use an official Python runtime as a parent image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Flask
RUN pip install -r requirement.txt

# Expose port 80 for the Flask app
EXPOSE 80

# Define the command to run your application
CMD ["python", "app.py"]
